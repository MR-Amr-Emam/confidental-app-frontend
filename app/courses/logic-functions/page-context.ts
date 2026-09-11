import { createContext, Dispatch, SetStateAction, useContext } from "react";

export const CoursesPageContext = createContext<
  {
    dataPointer: 1|2|3|4,
    setDataPointer:Dispatch<SetStateAction<any>>,

    courseScroll: number,
    setCourseScroll: Dispatch<SetStateAction<number>>,

    coursePopUp: number,
    setCoursePopUp: Dispatch<SetStateAction<number>>,
  } | null
>(null);

export function useCoursesPageContext() {
  const context = useContext(CoursesPageContext);

  if (!context) {
    throw new Error("useCoursesContext must be used within a CoursesProvider");
  }

  return context;
}