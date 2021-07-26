import React from 'react';
import { Provider } from 'react-redux';
import {
  render,
  cleanup,
  waitFor
} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import 'jest-dom/extend-expect';
import nock from 'nock';

import App from './App';
import store from './store';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

const CITY_NAME = "CITY_NAME";

describe('view GitHub repositories by username', () => {
  beforeAll(() => {
    nock('https://api.github.com')
      .persist()
      .get(`/users/${FAKE_USERNAME_WITH_REPOS}/repos`)
      .query(true)
      .reply(200, REPOS_LIST)
      .get(`/users/${FAKE_USERNAME_WITHOUT_REPOS}/repos`)
      .query(true)
      .reply(200, [])
      .get(`/users/${FAKE_BAD_USERNAME}/repos`)
      .query(true)
      .reply(404);;
  });

  afterEach(cleanup);

  describe('when GitHub user has public repositories', () => {
    it('user can view the list of public repositories for entered GitHub username', async () => {
      const { getByText, getByPlaceholderText, queryByText, getB } = render(<App />);
      userEvent.type(getByPlaceholderText('userSelection.usernamePlaceholder'), FAKE_USERNAME_WITH_REPOS);
      expect(getByPlaceholderText('userSelection.usernamePlaceholder')).toHaveAttribute('value', FAKE_USERNAME_WITH_REPOS);
      userEvent.click(getByText('userSelection.submitButtonText').closest('button'));
      getByText('repositories.header');
      await waitForElement(() => getByText('repositories.loadingText'));
      expect(queryByText('repositories.empty')).toBeNull();
      await waitForElement(() => REPOS_LIST.reduce((elementsToWaitFor, repository) => {
        elementsToWaitFor.push(getByText(repository.name));
        elementsToWaitFor.push(getByText(repository.description));
        return elementsToWaitFor;
      }, []));
      expect(queryByText('repositories.loadingText')).toBeNull();
      expect(queryByText('repositories.error')).toBeNull();
    });
  });
});