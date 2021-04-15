import React from "react";
import axios from "axios";
import { useState } from "react";
import "./styles.css";

export default function Cep() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  async function handleChangeCep(value) {
    await axios.get(`https://ws.apicep.com/cep/${value}.json`).then((res) => {
      if (res.data.status === 400) {
        setError(res.data.message);
      }
      console.log(res.data);
      setCity(res.data.city);
      setState(res.data.state);
      setDistrict(res.data.district);
      setAddress(res.data.address);
    });
  }
  return (
    <div id="container-body">
      <h1 class="title">Cep Validation</h1>
      <div className="container">
        <form onSubmit={() => {}} method="post">
          <div className="row">
            <div className="inputbox">
              <input type="text" id="nome" required />
              <label for="nome">Nome</label>
            </div>
            <div className="inputbox">
              <input type="text" id="email" required />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="inputbox">
              <span style={{ color: "#fff" }}>{error}</span>
              <input
                type="text"
                id="cep"
                onChange={() => {
                  const value = document.getElementById("cep").value;
                  if (value?.length !== 8) {
                    handleChangeCep(value);
                  }
                }}
                required
              />
              <label for="cep">CEP</label>
            </div>
            <div className="inputbox">
              <input type="text" id="endereco" value={address} required />
              <label for="endereco">Endereço</label>
            </div>
            <div className="inputbox">
              <input type="text" id="numero" required />
              <label for="numero">Número</label>
            </div>

            <div className="inputbox">
              <input type="text" id="estado" required />
              <label for="estado">Complemento</label>
            </div>
          </div>
          <div className="row">
            <div className="inputbox">
              <input type="text" id="bairro" value={district} required />
              <label for="bairro">Bairro</label>
            </div>
            <div className="inputbox">
              <input type="text" id="cidade" value={city} required />
              <label for="cidade">Cidade</label>
            </div>
            <div className="row">
              <select
                name="estado"
                id="estado"
                value={state}
                className="inputbox"
                required
              >
                <option value={null}>Selecione o Estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>
          </div>
          <div class="row">
            <button>Salvar</button>
          </div>
        </form>
      </div>
      <footer>©DeboraZandonai 2021</footer>
    </div>
  );
}
