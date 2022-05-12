/* eslint-disable camelcase */
import api from "./index";

export async function getProducts(
  nascimento = 1980,
  intensidade,
  tipo_seio,
  busto,
  torax
) {
  try {
    const res = await api
      .post("/medidas", {
        nascimento,
        intensidade,
        tipo_seio,
        busto,
        torax,
      })
      .then(({ data }) => {
        if (!data || typeof data !== "object") {
          throw new Error();
        }

        const keys = Object.keys(data?.products);

        const products = keys.reduce((acc, curr) => {
          if (!data?.products[curr]) return acc;

          const variants = data?.products[curr].filter((v) => v.img);

          if (!variants?.length) return acc;

          const colors = variants?.reduce((accColors, currColors) => {
            if (
              accColors.some((item) => item === currColors.cor) ||
              !currColors.cor
            )
              return accColors;
            return [...accColors, currColors.cor];
          }, []);

          return [
            ...acc,
            {
              name: data?.products[curr][0]?.name || curr,
              colors,
              variants,
            },
          ];
        }, []);

        return {
          ...data,
          products,
        };
      })
      .catch((err) => {
        throw new Error(err.message);
      });

    return res;
  } catch (err) {
    throw new Error(err.message);
  }
}

type Variant = {
  code: string;
  cor: string;
  img: string;
  name: string;
};

type Produto = {
  colors: string[];
  name: string;
  variants: Variant[];
};

export async function newsLetter(
  email: string,
  produtos: Produto[],
  intensidade: string,
  tamanhoA: string,
  tamanhoB: string,
  link: string
) {
  try {
    await api.post(
      "/sendmail",
      {
        email,
        produtos,
        intensidade,
        tamanhoA,
        tamanhoB,
        link,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function pesquisa(
  rate: number,
  email: string,
  comentario: string
) {
  try {
    await api.post(
      "/pesquisas",
      {
        rate,
        email,
        comentario,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  } catch (err) {
    throw new Error(err.message);
  }
}
