import { MainTitleSlide } from '@Front/Slides/01_MainTitle';
import { IntroductionCleanArchitectureSlide } from '@Front/Slides/02_IntroductionCleanArchitecture';
import { FirstStepSlide } from '@Front/Slides/03_FirstStep';
import { SingleResponsibilitySlide } from '@Front/Slides/04_SingleResponsibility';
import { OpenCloseSlide } from '@Front/Slides/05_OpenClose';
import { LiskovSubstitutionSlide } from '@Front/Slides/06_LiskovSubstitution';
import { type ComponentType } from 'react';

export const slides = [
  MainTitleSlide,
  IntroductionCleanArchitectureSlide,
  FirstStepSlide,
  SingleResponsibilitySlide,
  OpenCloseSlide,
  LiskovSubstitutionSlide,
] as ComponentType[];
