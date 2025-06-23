import { MainTitleSlide } from '@Front/Slides/01_MainTitle';
import { IntroductionCleanArchitectureSlide } from '@Front/Slides/02_IntroductionCleanArchitecture';
import { FirstStepSlide } from '@Front/Slides/03_FirstStep';
import { SingleResponsibilitySlide } from '@Front/Slides/04_SingleResponsibility';
import { OpenCloseSlide } from '@Front/Slides/05_OpenClose';
import { LiskovSubstitutionSlide } from '@Front/Slides/06_LiskovSubstitution';
import { InterfaceSegregationSlide } from '@Front/Slides/07_InterfaceSegregation';
import { DependencyInversionSlide } from '@Front/Slides/08_DependencyInversion';
import { ConclusionSlide } from '@Front/Slides/09_Conclusion';
import { FurtherReadingSlide } from '@Front/Slides/10_FurtherReading';
import { type ComponentType } from 'react';

export const slides = [
  MainTitleSlide,
  IntroductionCleanArchitectureSlide,
  FirstStepSlide,
  SingleResponsibilitySlide,
  OpenCloseSlide,
  LiskovSubstitutionSlide,
  InterfaceSegregationSlide,
  DependencyInversionSlide,
  ConclusionSlide,
  FurtherReadingSlide,
] as ComponentType[];
