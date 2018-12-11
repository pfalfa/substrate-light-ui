import styled from 'styled-components';

export const IdentityAppStyles = styled.div`
  .app--account-Status {
    display: inline-block;
    position: fixed;
    right: 0.25rem;
    top: 0.125rem;
    z-index: 1001;
  }

  .app--account-Status-Item {
    align-items: center;
    background: #00688b;
    border-radius: $small-corner;
    color: white;
    display: flex;
    margin: 0.125rem;
    padding: 0 0.5rem;
    text-align: center;
    opacity: 0.9;
    vertical-align: middle;

    .desc {
      padding: 0.5rem 1rem;

      .status {
        font-weight: 700;
      }
    }

    .short {
      font-size: 2.5rem;
      padding: 0.5rem;

      i.icon {
        line-height: 1;
      }
    }

    &.error {
      background: #cd9b1d;
      color: #fff;
    }
`;
