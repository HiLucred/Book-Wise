export function useCategorieMostRead(categories: string[]) {
  const categorieMostRead = categories.reduce(
    (maisCitado: string, elemento: string) =>
      categories.filter((item) => item === elemento).length >
      categories.filter((item) => item === maisCitado).length
        ? elemento
        : maisCitado,
  )

  return categorieMostRead
}
