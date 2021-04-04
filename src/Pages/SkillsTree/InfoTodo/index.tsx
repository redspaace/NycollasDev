import React from 'react';
import { motion } from 'framer-motion';

import { Container, Info } from './styles';

const InfoTodo: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 2.5, duration: 2 }}>
      <Container>
        <Info>
          Escolha alguma Skill para ver mais informações.
      </Info>
      </Container>
    </motion.div>
  );
}

export default InfoTodo;