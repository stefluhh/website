import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, StyledDatenschutzSection } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const DatenschutzPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <StyledDatenschutzSection/>
    </StyledMainContainer>
  </Layout>
);

DatenschutzPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DatenschutzPage;