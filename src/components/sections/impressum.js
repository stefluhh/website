import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledImpressumSection = styled.section`
  max-width: 1200px;

`;
const StyledText = styled.div`
`;

const StyledImpressum = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledImpressumSection id="impressum" ref={revealContainer}>
      <StyledText>
        <div>
          <h1>Legal Disclosure / Impressum</h1>
          <p>Information in accordance with Section 5 TMG</p>
          <p>
            Stefano Lucka<br/>
            Uckermarkweg 1️⃣2️⃣d<br/>
            2️⃣2️⃣4️⃣1️⃣5️⃣ Hamburg
          </p>
          <p>
            <strong>Contact Information</strong><br/>
            Telephone: +4️⃣9️⃣ 1️⃣5️⃣️7️⃣️ 5️⃣️7️⃣️1️⃣6️⃣️7️⃣️9️⃣️7️⃣️8️⃣️<br/>
            E-Mail: freelance@stefano-lucka.dev<br/><br/>
            Internet address: https://stefano-lucka.dev
          </p>
          <p>
            Disclaimer<br/>
            The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this matter, please note that we are not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
          </p>
          <p>
            Accountability for links<br/>
            Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.
          </p>
          <p>
            General Information<br/>
            We are responsible for the content of our websites in accordance with the general laws, especially pursuant to § 7 TMG (Telemedia Act). All content is created with care and to the best of our knowledge.
            The information on this website (especially in text articles, videos, forum posts, news articles, etc.), on linked or hosted videos, or on linked external sources, is provided for general information purposes only and does not constitute advice, declarations of intent, or any other legally binding statements unless they concern service or product descriptions.
            For content, posts, forum contributions, user comments, or any other content, we do not guarantee accuracy, completeness, and timeliness unless they relate to service or product descriptions.
            When we refer to third-party websites on our web pages through links, we cannot guarantee the currency, accuracy, and completeness of the linked content. These are beyond our area of responsibility, and we have no influence on their future design.
            In particular, answering user questions, both on our website and on any other social media platform, does not constitute advice, declarations of intent, or any other legally binding statements.
            If you believe that any content violates applicable law or is inappropriate, please inform us.
            The legal notices on this page, as well as all questions and disputes related to the design of this website, are subject to the laws of the Federal Republic of Germany.
            If you intend to send us a cease and desist letter (Abmahnung), in order to avoid unnecessary legal disputes and costs, we kindly request that you contact us in advance. The legal fees of a lawyer's cease and desist letter without prior contact with the operator will be rejected as unfounded in the interest of reducing damages. The costs incurred by us will be invoiced.
          </p>
          <p>
            Copyright<br/>
            Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.
          </p>
          <a href="https://language-boutique.de/naithani/blogpost/impressum-auf-englisch.html" target="_blank" rel="nofollow"> Language Boutique.de/Muster-Impressum </a>
        </div>
      </StyledText>
    </StyledImpressumSection>
  );
};

export default StyledImpressum;
