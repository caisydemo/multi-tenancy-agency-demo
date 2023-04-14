import { gql } from "graphql-request";

export const f_Faq = gql`
  fragment Faq on Faq {
    headline
    subheadline
    sections {
      ... on FaqSection {
        id
        title
        description {
          json
        }
      }
    }
    id
  }
`;
