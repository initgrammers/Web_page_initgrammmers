import React from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  makeStyles,
  Container,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BorderClear } from '@material-ui/icons';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles({
  color: {
    borderColor: '#E1197D',
  },
});

const Deploy = () => {
  const classes = useStyles();

  return (
    <Box mx={30}>
      <Container>
        <Box>
          <Typography align="center">Preguntas frecuentes</Typography>
          <Box my={2} border={1} borderColor="#E1197D" borderRadius={5}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <HelpOutlineIcon color="primary" />
                <Typography variant="body1">
                  Como mejoraría mi produccción?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Tus productos estarían disponibles en todo el mundo, se podrían
                  hacer los pedidos con mucha facilildad y efectividad. Con un
                  excelente servicio desde q usted se conecta con nosostros.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Box mb={2} border={1} borderColor="#E1197D" borderRadius={5}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <HelpOutlineIcon color="primary" />
                <Typography variant="body1">
                  Como mejoraría mi produccción?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Tus productos estarían disponibles en todo el mundo, se podrían
                  hacer los pedidos con mucha facilildad y efectividad. Con un
                  excelente servicio desde q usted se conecta con nosostros.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Box mb={2} border={1} borderColor="#E1197D" borderRadius={5}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <HelpOutlineIcon color="primary" />
                <Typography variant="body1">
                  Como mejoraría mi produccción?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Tus productos estarían disponibles en todo el mundo, se podrían
                  hacer los pedidos con mucha facilildad y efectividad. Con un
                  excelente servicio desde q usted se conecta con nosostros.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>

          <Box mb={2} border={1} borderColor="#E1197D" borderRadius={5}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <HelpOutlineIcon color="primary" />
                <Typography variant="body1">
                  Como mejoraría mi produccción?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Tus productos estarían disponibles en todo el mundo, se podrían
                  hacer los pedidos con mucha facilildad y efectividad. Con un
                  excelente servicio desde q usted se conecta con nosostros.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Deploy;
