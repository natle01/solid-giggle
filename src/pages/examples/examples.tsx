import { CarouselProps } from '@natle01/laughing-kookaburra';
import { Technology } from '../HomePage/TechStackSection/TechStackSection';

import { projectDetails as designSystemProject } from './DesignSystem/Project';
// import { projectDetails as motionGraphicsProject } from './MotionGraphics/Project';
// import { projectDetails as recipeGeneratorProject } from './RecipeGenerator/Project';
import { projectDetails as sharePointDSProject } from './SharePointDS/Project';
import { projectDetails as vivaAmplifyProject } from './VivaAmplify/Project';


/**
 * Project details.
 */
export type ProjectDetails = Pick<CarouselProps, 'items'> & {
  ext: string;
  title: string;
  blurb: string;
  description: string;
  tech: Technology[];
  logo?: string;
  isNDA?: boolean;
  url: string;
  urlLabel: string;
};

/**
 * List of all project examples.
 */
export const PROJECTS: ProjectDetails[] = [
  sharePointDSProject,
  vivaAmplifyProject,
  designSystemProject,
  // motionGraphicsProject,
  // recipeGeneratorProject
];