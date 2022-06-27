import { createTheme, ThemeOptions } from "@mui/material";

export interface ITheme {
  primary: string;
  paper: string;
  blue: string;
  grey: string;
  white: string;
}

interface ITypography {
  title1: {};
  title2: {};
  title3: {};
  subTitle1: {};
  subTitle2: {};
}

interface IPalette {
  paper: true;
}

declare module "@mui/material" {
  interface Theme extends ITheme {}
  interface ThemeOptions extends ITheme {}
  interface TypographyPropsVariantOverrides extends ITypography {}
  interface ButtonPropsColorOverrides extends IPalette {}
}

export const AppColors: ITheme = {
  primary: "#000",
  paper: "#343851",
  blue: "#0277b4",
  grey: "#808080",
  white: "#fff",
};

const commonTheme = {
  ...AppColors,

  palette: {
    paper: {
      default: AppColors.paper,
      dark: "#ccc",
    },
    background: {
      default: "rgb(249,250,254)",
    },

    white: {
      default: "#ffffff",
    },
  },

  typography: {
    fontFamily: "Inter",
    button: {
      textTransform: "none",
    },
    title1: {
      fontWeight: 500,
      fontSize: "2.7rem",
      lineHeight: "2rem",
      color: AppColors.blue,
    },
    title2: {
      fontWeight: 500,
      fontSize: "0.8rem",
      color: AppColors.grey,
    },
    title3: {
      fontWeight: 500,
      fontSize: "0.9rem",
      lineHeight: "2rem",
      color: AppColors.primary,
    },
    subTitle1: {
      fontWeight: 600,
      fontSize: "1.1rem",
      lineHeight: "2rem",
      color: AppColors.primary,
    },
    subTitle2: {
      fontWeight: 400,
      fontSize: "0.6rem",
      color: AppColors.grey,
    },
  },

  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "48px",
          fontSize: "1rem",
          display: "flex",
          alignContent: "center",
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: AppColors.primary,
            },
          },
          "&.MuiTextField-root": {
            color: AppColors.primary,
          },
        },

        notchedOutline: {
          border: "1px solid #ccc",
          borderColor: AppColors.primary + "40",
        },
        input: {
          color: AppColors.primary,
          "&::placeholder": {
            fontSize: "16px",
            lineHeight: "16px",
            fontWeight: 600,
            opacity: 0.5,
          },
        },
      },
    },
  },
} as ThemeOptions;

const theme = createTheme(commonTheme);

export default theme;
