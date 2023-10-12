import styled from "styled-components";

export const ContactForm = styled.form`
  width: 40%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    margin: auto;
  }
`;

export const FormLabel = styled.p`
  text-align: left;
  color: ${({ theme }) => theme.colors.para_text_color};
  padding-bottom: 10px;
`;
export const FormInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_light};
  border: 1px solid ${({ theme }) => theme.colors.para_text_color};
  color: ${({ theme }) => theme.colors.para_text_color};
  border-radius: 5px;
  padding: 15px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.para_text_color};
  }
`;
