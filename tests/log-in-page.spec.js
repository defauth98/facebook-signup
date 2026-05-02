import { describe, test } from "@playwright/test";

describe("Login page", () => {
  test("Login", async ({ page }) => {
    await page.goto("http://localhost:9000/");
    await page.getByRole("textbox", { name: "Email ou telefone" }).click();
    await page
      .getByRole("textbox", { name: "Email ou telefone" })
      .fill("mail@mail.com");
    await page.locator("#user-password").click();
    await page.locator("#user-password").fill("senha123");
    page.once("dialog", (dialog) => {
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole("button", { name: "Entrar" }).click();
  });

  test("Sign In", async ({ page }) => {
    await page.goto("http://localhost:9000/");
    await page.getByRole("textbox", { name: "Email ou telefone" }).click();
    await page.getByRole("textbox", { name: "Nome", exact: true }).click();
    await page
      .getByRole("textbox", { name: "Nome", exact: true })
      .fill("Meu nome");
    await page.getByRole("textbox", { name: "Nome", exact: true }).press("Tab");
    await page
      .getByRole("textbox", { name: "Sobrenome" })
      .fill("Meu sobrenome");
    await page.getByRole("textbox", { name: "Sobrenome" }).press("Tab");
    await page
      .getByRole("textbox", { name: "Celular ou email" })
      .fill("mail@mail.com");
    await page.getByRole("textbox", { name: "Celular ou email" }).press("Tab");
    await page.getByRole("textbox", { name: "Nova senha" }).fill("123");
    await page.getByRole("textbox", { name: "Data de nascimento" }).click();
    await page
      .getByRole("textbox", { name: "Data de nascimento" })
      .fill("12/02/1200");
    await page.getByText("Feminino Masculino Customizado").click();
    await page.locator("#custom-gender").check();
    await page.getByRole("textbox", { name: "Gênero (opcional)" }).click();
    await page
      .getByRole("textbox", { name: "Gênero (opcional)" })
      .fill("Gênero customizado");
  });
});
