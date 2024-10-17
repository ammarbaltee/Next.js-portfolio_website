"use client"; 

import React from 'react';
import { ToastProvider } from "@/hooks/use-toast";
import { FormProvider } from "@/hooks/FormContext";

const ClientOnly = ({ children }) => {
  return (
    <ToastProvider>
      <FormProvider>
        {children}
      </FormProvider>
    </ToastProvider>
    
  );
};

export default ClientOnly;
