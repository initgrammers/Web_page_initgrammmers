import PropTypes from 'prop-types';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { ExpandMoreIcon } from '#app/assets/icons';
import { primary } from '#app/shared/config/theme/colors';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';

const CustomAccordion = ({
  title = '',
  details = '',
  children = null,
  mt = 2,
  mb = 0,
  borderRadius = 1,
}) => {
  return (
    <Box
      mb={mb}
      mt={mt}
      width="100%"
      border={1}
      borderColor={primary.main}
      borderRadius={borderRadius}
    >
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
          <Box mr={1}>
            <HelpOutlineIcon color="primary" />
          </Box>
          <Typography variant="body1">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">{details}</Typography>
          {children}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
CustomAccordion.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
  children: PropTypes.node,
  mt: PropTypes.number,
  mb: PropTypes.number,
  borderRadius: PropTypes.number,
};

export default CustomAccordion;
