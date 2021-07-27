import React from 'react';
import { Provider } from 'react-redux';
import {
  render,
  screen,
  cleanup,
} from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import nock from 'nock';

import App from '../App';
import store from '../store';

import * as Responses from './responses';
import { API_KEY_OPEN_WEATHER_MAP } from '../globals/configurations';

describe('Testing API features', () => {
  beforeAll(() => {
    nock("https://api.openweathermap.org/data/2.5/weather/")
      .persist()

      .get("/")
      .query({ q: "São Carlos", lang: "pt_br", units: "metric", appid: API_KEY_OPEN_WEATHER_MAP })
      .reply(200, Responses.saoCarlos, {'Access-Control-Allow-Origin': '*'})

    .get("/")
    .query({ q: "Araraquara", lang: "pt_br", units: "metric", appid: API_KEY_OPEN_WEATHER_MAP })
    .reply(200, Responses.araraquara, {'Access-Control-Allow-Origin': '*'})

    .get("/")
    .query({ q: "São Paulo", lang: "pt_br", units: "metric", appid: API_KEY_OPEN_WEATHER_MAP })
    .reply(200, Responses.saoPaulo, {'Access-Control-Allow-Origin': '*'})
  });

  afterEach(cleanup);

  describe("Testing App.jsx", () => {
    // Deve ser possível exibir o elemento h1 na página
    it("should be able to show the title of the page", () => {
      render(<Provider store={store}><App /></Provider>);
      const titlePage = screen.getByText(/Verificar Previsão de Tempo/i);

      expect(titlePage).toBeInTheDocument();
    });
  });

  describe("Testing fetching API", () => {
    // Verifica os dados do card
    it("should be able to show the São Carlos card", async () => {
      render(<Provider store={store}><App /></Provider>);

      const button = screen.getByText("São Carlos");

      userEvent.click(button);

      const cityName = await screen.findAllByTestId(`city-name-${Responses.saoCarlos.name}`);
      const temp = await screen.findByText(`${Responses.saoCarlos.main.temp.toString().replace(".", ",")} ºC`);
      const temp_min = await screen.findByText(`${Responses.saoCarlos.main.temp_min.toString().replace(".", ",")} ºC`);
      const temp_max = await screen.findByText(`${Responses.saoCarlos.main.temp_max.toString().replace(".", ",")} ºC`);

      expect(cityName).toBeTruthy();
      expect(temp).toBeTruthy();
      expect(temp_min).toBeTruthy();
      expect(temp_max).toBeTruthy();
    });

    it("should be able to show the Araraquara card", async () => {
      render(<Provider store={store}><App /></Provider>);

      const button = screen.getByText("Araraquara");

      userEvent.click(button);

      const cityName = await screen.findAllByTestId(`city-name-${Responses.araraquara.name}`);
      const temp = await screen.findByText(`${Responses.araraquara.main.temp.toString().replace(".", ",")} ºC`);
      const temp_min = await screen.findByText(`${Responses.araraquara.main.temp_min.toString().replace(".", ",")} ºC`);
      const temp_max = await screen.findByText(`${Responses.araraquara.main.temp_max.toString().replace(".", ",")} ºC`);

      expect(cityName).toBeTruthy();
      expect(temp).toBeTruthy();
      expect(temp_min).toBeTruthy();
      expect(temp_max).toBeTruthy();
    });

    it("should be able to show the São Paulo card", async () => {
      render(<Provider store={store}><App /></Provider>);

      const button = screen.getByText("São Paulo");

      userEvent.click(button);

      const cityName = await screen.findAllByTestId(`city-name-${Responses.saoPaulo.name}`);
      const temp = await screen.findByText(`${Responses.saoPaulo.main.temp.toString().replace(".", ",")} ºC`);
      const temp_min = await screen.findByText(`${Responses.saoPaulo.main.temp_min.toString().replace(".", ",")} ºC`);
      const temp_max = await screen.findByText(`${Responses.saoPaulo.main.temp_max.toString().replace(".", ",")} ºC`);

      expect(cityName).toBeTruthy();
      expect(temp).toBeTruthy();
      expect(temp_min).toBeTruthy();
      expect(temp_max).toBeTruthy();
    });
  });

});