# Guía de Mocking con Jest en TypeScript

En TypeScript, puedes crear *mocks* con Jest utilizando `jest.fn()`, `jest.spyOn()`, o creando un mock manualmente. Aquí tienes varias formas de hacerlo:

---

## Mock de una función simple

Si tienes una función que quieres mockear en una prueba:

```typescript
const myFunction = jest.fn();
myFunction.mockReturnValue("Hola mundo");

console.log(myFunction()); // "Hola mundo"
```

También puedes hacer que el mock devuelva diferentes valores en cada llamada:

```typescript
const myFunction = jest.fn()
  .mockReturnValueOnce("Primera llamada")
  .mockReturnValueOnce("Segunda llamada");

console.log(myFunction()); // "Primera llamada"
console.log(myFunction()); // "Segunda llamada"
console.log(myFunction()); // undefined (sin más valores)
```

---

## Mock de un módulo entero

Si tienes un módulo y quieres mockear sus funciones:

```typescript
// math.ts
export const suma = (a: number, b: number) => a + b;
export const resta = (a: number, b: number) => a - b;
```

En la prueba:

```typescript
import * as math from "./math";

jest.mock("./math");

test("mock de función en un módulo", () => {
  (math.suma as jest.Mock).mockReturnValue(10);

  expect(math.suma(2, 3)).toBe(10); // Se ignora la implementación real
});
```

---

## Mock con `jest.spyOn()`

Si quieres espiar una función sin reemplazar completamente su implementación:

```typescript
import * as math from "./math";

test("usar spyOn para mockear una función específica", () => {
  const spy = jest.spyOn(math, "suma").mockReturnValue(20);

  expect(math.suma(2, 3)).toBe(20);
  expect(spy).toHaveBeenCalledWith(2, 3);

  spy.mockRestore(); // Restaura la implementación original
});
```

---

## Mock de una clase

Si tienes una clase y quieres simular su comportamiento:

```typescript
class UserService {
  getUser() {
    return { id: 1, name: "Alice" };
  }
}

// Crear un mock de la clase
const mockUserService = jest.fn().mockImplementation(() => ({
  getUser: jest.fn().mockReturnValue({ id: 99, name: "Mocked User" }),
}));

test("mock de una clase", () => {
  const service = new mockUserService();
  expect(service.getUser()).toEqual({ id: 99, name: "Mocked User" });
});
```

---


