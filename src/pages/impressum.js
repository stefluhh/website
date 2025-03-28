import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, StyledImpressumSection } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const ImpressumPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <StyledImpressumSection/>
    </StyledMainContainer>
  </Layout>
);

ImpressumPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ImpressumPage;