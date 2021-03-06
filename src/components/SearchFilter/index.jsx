import React, { useState } from "react";
import { Container, Link, Titulo, Wrapper } from "../UseState&props/styles";

import personagensSonic from "../../assets/personagensSonicSearch.json";
import { v4 as uuidv4 } from "uuid";
import Card from "./card";

import styled from "styled-components";

const SearchBar = styled.input`
  min-width: 200px;
  max-width: 300px;
  width: 100%;
  height: 30px;
  padding: 5px;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 10px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  justify-content: center;
  width: 100%;
  gap: 20px;
  overflow-y: hidden;
`;

const Category = styled.div`
  width: 100px;
  height: 30px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: ${(props) =>
    props.categoryStatus === props.id ? "blue" : "transparent"};
`;

const OrderWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const OrderCategory = styled.div`
  width: 100px;
  height: 30px;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export default function SearchFilter() {
  const [searchBarStatus, setSearchBarStatus] = useState("");
  const [categoryStatus, setCategoryStatus] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [lista, setLista] = useState(personagensSonic);


  function order(lista){            
    if(orderStatus === "")
      setLista(lista)
    else if(orderStatus === "velocidade")
      setLista(lista.sort((a, b) => (a.velocidade < b.velocidade ? 1 : -1)))
    else
      setLista(lista.sort((a, b) => (a.forca < b.forca ? 1 : -1)))
  }

  return (
    <Wrapper style={{ backgroundColor: "#c70000" }}>
      <Container style={{ width: "100%", gap: "20px" }}>
        <Titulo>
          SearchFilter
          <Link id="secao7"></Link>
        </Titulo>
        <SearchBar
          type="text"
          placeholder="Nome do personagem"
          onChange={(event) => setSearchBarStatus(event.target.value)}
          value={searchBarStatus}
        ></SearchBar>

        <h2 style={{ color: "white" }}>Filtrar categorias</h2>
        <CategoryWrapper>
          <Category
            id="Ouri??o"
            categoryStatus={categoryStatus}
            onClick={(event) =>
              categoryStatus === event.target.id
                ? setCategoryStatus("")
                : setCategoryStatus(event.target.id)
            }
          >
            Ouri??o
          </Category>
          <Category
            id="Humano"
            categoryStatus={categoryStatus}
            onClick={(event) =>
              categoryStatus === event.target.id
                ? setCategoryStatus("")
                : setCategoryStatus(event.target.id)
            }
          >
            Humano
          </Category>
          <Category
            id="Rob??"
            categoryStatus={categoryStatus}
            onClick={(event) =>
              categoryStatus === event.target.id
                ? setCategoryStatus("")
                : setCategoryStatus(event.target.id)
            }
          >
            Rob??
          </Category>
          <Category
            id="O resto"
            categoryStatus={categoryStatus}
            onClick={(event) =>
              categoryStatus === event.target.id
                ? setCategoryStatus("")
                : setCategoryStatus(event.target.id)
            }
          >
            O resto
          </Category>
        </CategoryWrapper>
        <div>
          <h2 style={{ color: "white" }}>Ordenar por</h2>
          <h4 style={{ color: "white", margin: "0", textAlign: "center" }}>Clicar 2x</h4>
        </div>

        <OrderWrapper>
          <OrderCategory
            id="velocidade"
            orderStatus={orderStatus}
            onClick={(event) => {
              orderStatus === event.target.id
                ? setOrderStatus("")
                : setOrderStatus(event.target.id);
                order(lista)
            }
            }
          >
            Velocidade
          </OrderCategory>
          <OrderCategory
            id="forca"
            orderStatus={orderStatus}
            onClick={(event) => {
              orderStatus === event.target.id
                ? setOrderStatus("")
                : setOrderStatus(event.target.id);
                order(lista)
            }
            }
          >
            For??a
          </OrderCategory>
        </OrderWrapper>
        <CardWrapper>
          {
          lista
            .filter((val) => {
              if (searchBarStatus === "") {
                return val;
              } else if (
                val.nome.toLowerCase().includes(searchBarStatus.toLowerCase())
              ) {
                return val;
              }
              return val; /* just to */
            })
            .map((val) => (
              <Card
                key={uuidv4()}
                categoryStatus={categoryStatus}
                personagem={val}
              />
            ))}
        </CardWrapper>
      </Container>
    </Wrapper>
  );
}
