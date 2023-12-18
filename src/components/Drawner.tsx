import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

interface OpenClose {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
}

export function Drawner({ open, close, children }: OpenClose) {
  return (
    <React.Fragment>
      <Drawer placement="right" open={open} onClose={close} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-lg font-bold">Cadastro de Colaborador</span>
          <IconButton variant="text" color="blue-gray" onClick={close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {children}
      </Drawer>
    </React.Fragment>
  );
}
