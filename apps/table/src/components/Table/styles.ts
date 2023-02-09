import styled from '@emotion/styled';

export const TableStyles = styled.div`
  flex: 1;
  display: flex;
  overflow: auto;

  border: 1px solid #555;

  & > table {
    width: 100%;

    box-sizing: content-box;
    border-collapse: collapse;

    & > thead {
      position: sticky;
      top: 0;
      background: #242424;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
      transform: translateY(-1px);

      & > tr > th:not(:last-of-type) {
        border-right: 1px solid #ccc;
      }
    }

    & > tbody {
      & > tr {
        border-bottom: 1px solid #ccc;
        & > td:not(:last-of-type) {
          border-right: 1px solid #ccc;
        }
      }
    }

    & th,
    td {
      padding: 0;
    }
  }
`;
