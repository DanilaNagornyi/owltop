export const variants = {
  visible: {
    transaction: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      marginBottom: 20,
    }
  },
  hidden: {
    marginBottom: 0,
  },
};

export const variantsChildren = {
  visible: {
    opacity: 1,
    height: 'auto',
  },
  hidden: {
    opacity: 0,
    height: 0,
  },
};
