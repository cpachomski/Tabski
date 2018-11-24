import React, { Component, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { XContainer } from 'design/structure';
import SheetHeader from 'organisms/sheet/header';
import Section from 'organisms/section';
import { Box } from './atoms';

const SheetSections = memo(({ sections }) => (
  <>
    {sections &&
      sections.length > 0 &&
      sections.map((section, i) => (
        <Section key={`s:${i}`} sectionId={i} {...section} />
      ))}
  </>
));

class Sheet extends Component {
  static propTypes = {
    sections: PropTypes.array,
    sheetName: PropTypes.string
  };

  render() {
    const { sections } = this.props;

    return (
      <XContainer>
        <Box>
          <SheetHeader />
          <SheetSections sections={sections} />
        </Box>
      </XContainer>
    );
  }
}

export default connect(({ present: { sections } }) => ({
  sections
}))(Sheet);
