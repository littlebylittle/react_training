import timesTwo from "./functions";
import {expect, jest, test} from '@jest/globals';
import { render, screen } from '@testing-library/react';

test("Multiplies by two", () => {
  expect(timesTwo(4)).toBe(8);



  
});
// C:\Users\Igor_Mashnikov\code\react-tutorial\react_essential_training\Ch08\08_02\finished\react-app\src\functions.test.js