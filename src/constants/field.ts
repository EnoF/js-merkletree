import bigInt from 'big-integer';

const qString = '21888242871839275222246405745257275088548364400416034343698204186575808495617';

export const FIELD_SIZE = bigInt(qString);
export const MAX_NUM_IN_FIELD = FIELD_SIZE.subtract(bigInt.one);
