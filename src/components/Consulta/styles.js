import styled from 'styled-components';

export const Wrraper = styled.div`
    height: 100%;
    background-size: cover;
    background: linear-gradient(-90deg, #7159c1, #ab59c1);
`;

export const Container = styled.div`
background: linear-gradient(-90deg, #7159c1, #ab59c1);
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`

  font-size: 48px;
  color: #3a3a3a;
`;

export const CardContainer = styled.section`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

export const TableContainer = styled.section`
  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #FFF;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 13px;
      font-weight: normal;
      color: #7159c1;

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #12a454;
      }

      &.outcome {
        color: #e83f5b;
      }

      button {
        background: none;
        border: none;
        padding-bottom: 5px;
        color: #7159c1;
      }

    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
