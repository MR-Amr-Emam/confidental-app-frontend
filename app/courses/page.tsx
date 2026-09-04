"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CoursesSection from "./courses-section";
import DoctorsSection from "./doctors-section";
import MonthsSection from "./months-section";
import BranchesSection from "./branches-section";
import {CoursesPageContext} from "./logic-functions/page-context";
import { useState } from "react";
import HeaderSection from "./header-section";



export default function CoursesPage() {
  const [queryClient] = useState(() => new QueryClient());

  // context
  const [dataPointer, setDataPointer] = useState<1|2|3|4>(1);
  const [courseScroll, setCourseScroll] = useState<number>(0);

  return (
    <QueryClientProvider client={queryClient}>
      <CoursesPageContext.Provider value={{
        dataPointer, setDataPointer,
        courseScroll, setCourseScroll,}}>

        <HeaderSection />
        {(dataPointer==1)?<CoursesSection />:""}
        {(dataPointer==2)?<DoctorsSection />:""}
        {(dataPointer==3)?<MonthsSection />:""}
        {(dataPointer==4)?<BranchesSection />:""}
      </CoursesPageContext.Provider>
    </QueryClientProvider>
  );
}