import {
  createContext,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
  type Dispatch,
  type SetStateAction
} from 'react';

import { mergeClasses } from '../../utils/utilities';
import styles from './Container.module.css';

/**
 * Props for the Container component.
 */
export type ContainerProps = ComponentPropsWithoutRef<'div'> & {
  appearance?: 'default' | 'transparent';
};

type ContainerHeadingContextValue = {
  setHeadingId: Dispatch<SetStateAction<string | undefined>>;
};

const ContainerHeadingContext = createContext<ContainerHeadingContextValue | null>(null);

/**
 * A shared container wrapper.
 * @returns A React.ReactElement.
 */
export const Container = ({
  appearance = 'default',
  className,
  'aria-labelledby': ariaLabelledBy,
  children,
  ...rest
}: ContainerProps): React.ReactElement => {
  const [headingId, setHeadingId] = useState<string>();
  const headingContext = useMemo(() => (
    { setHeadingId }
  ), [setHeadingId]);

  return (
    <ContainerHeadingContext.Provider value={headingContext}>
      <div
        className={mergeClasses(
          styles.container,
          styles[`container--${appearance}`],
          className
        )}
        aria-labelledby={ariaLabelledBy ?? headingId}
        {...rest}
      >
        {children}
      </div>
    </ContainerHeadingContext.Provider>
  );
};

/**
 * Props for the ContainerHeading component.
 */
export type ContainerHeadingProps = ComponentPropsWithoutRef<'div'> & {
  ariaLevel?: 1 | 2 | 3 | 4 | 5 | 6;
};

/**
 * A shared heading for containers.
 * @param ariaLevel Heading level exposed via aria-level (default 3).
 * @returns A React.ReactElement element.
 */
export const ContainerHeading = ({
  ariaLevel = 3,
  className,
  id,
  ...rest
}: ContainerHeadingProps): React.ReactElement => {
  const context = useContext(ContainerHeadingContext);
  const generatedId = useId();
  const headingId = id ?? generatedId;

  useEffect(() => {
    context?.setHeadingId(headingId);
  }, [context, headingId]);

  return (
    <div
      id={headingId}
      className={mergeClasses(styles.containerHeading, className)}
      role='heading'
      aria-level={ariaLevel}
      {...rest}
    />
  );
};
