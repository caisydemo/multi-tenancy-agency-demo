import { gql } from "graphql-request";
import { f_BlogArticleGrid } from "./BlogArticleGrid";
import { f_ContactForm } from "./ContactForm";
import { f_Fulltext } from "./Fulltext";
import { f_FullwidthBlogTeaser } from "./FullwidthBlogTeaser";
import { f_Headline } from "./Headline";
import { f_NewsletterSignup } from "./NewsletterSignup";
import { f_Faq } from "./Faq";

export const f_Page = gql`
  ${f_ContactForm}
  ${f_BlogArticleGrid}
  ${f_NewsletterSignup}
  ${f_FullwidthBlogTeaser}
  ${f_Headline}
  ${f_Fulltext}
  ${f_Faq}

  fragment Page on Page {
    components {
      __typename
      ...ContactForm
      ...BlogArticleGrid
      ...NewsletterSignup
      ...FullwidthBlogTeaser
      ...Headline
      ...Fulltext
      ...Faq
    }
    id
    seo {
      title
      ogImage {
        id
      }
      keywords
      id
      description
    }
    slug
  }
`;
