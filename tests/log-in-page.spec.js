import { expect, describe, test } from "@playwright/test";

describe("Login page", () => {
  test("Login", async ({ page }) => {
    await page.goto("http://localhost:9000/");
    await page.getByTestId("login-email-input").click();
    await page.getByTestId("login-email-input").fill("mail@mail.com");
    await page.getByTestId("login-password-input").click();
    await page.getByTestId("login-password-input").fill("senha123");

    await expect(page.getByTestId("login-email-input")).toHaveValue(
      "mail@mail.com",
    );
    await expect(page.getByTestId("login-password-input")).toHaveValue(
      "senha123",
    );

    await expect(page.getByTestId("login-button")).toBeVisible();

    page.on("dialog", async (dialog) => {
      expect(dialog.message()).toBe("mail@mail.com");
      await dialog.accept();
    });
    await page.getByTestId("login-button").click();
  });

  test("Sign In", async ({ page }) => {
    const nome = "Meu nome";
    const sobrenome = "Sobrenome";
    const email = "mail@mail.com";
    const dataNascimento = "12/02/1200";
    const genero = "Gênero customizado";

    await page.goto("http://localhost:9000/");
    await page.getByTestId("firstname-input").click();
    await page.getByTestId("firstname-input").fill(nome);
    await page.getByTestId("firstname-input").press("Tab");
    await page.getByTestId("lastname-input").fill(sobrenome);
    await page.getByTestId("lastname-input").press("Tab");
    await page.getByTestId("email-input").fill(email);
    await page.getByTestId("email-input").press("Tab");
    await page.getByTestId("password-input").fill("123");
    await page.getByTestId("birthdate-input").click();
    await page.getByTestId("birthdate-input").fill(dataNascimento);
    await page.getByTestId("gender-custom").check();
    await page.getByTestId("custom-gender-input").click();
    await page.getByTestId("custom-gender-input").fill(genero);

    await page.getByTestId("register-button").click();
    const rightContent = await page.locator(".right-content");

    await expect(rightContent).toContainText(nome);
    await expect(rightContent).toContainText(sobrenome);
    await expect(rightContent).toContainText(email);
    await expect(rightContent).toContainText(dataNascimento);
  });

  test("Sign In - Not contain an ", async ({ page }) => {
    const nome = "Meu nome";
    const sobrenome = "Sobrenome";
    const email = "mail@mail.com";
    const dataNascimento = "12/02/1200";
    const genero = "Gênero customizado";

    await page.goto("http://localhost:9000/");
    await page.getByTestId("firstname-input").click();
    await page.getByTestId("firstname-input").fill(nome);
    await page.getByTestId("firstname-input").press("Tab");
    await page.getByTestId("lastname-input").fill(sobrenome);
    await page.getByTestId("lastname-input").press("Tab");
    await page.getByTestId("email-input").fill(email);
    await page.getByTestId("email-input").press("Tab");
    await page.getByTestId("password-input").fill("123");
    await page.getByTestId("birthdate-input").click();
    await page.getByTestId("birthdate-input").fill(dataNascimento);
    await page.getByTestId("gender-custom").check();
    await page.getByTestId("custom-gender-input").click();
    await page.getByTestId("custom-gender-input").fill(genero);

    await page.getByTestId("register-button").click();
    const rightContent = await page.locator(".right-content");

    await expect(rightContent).not.toContainText(`"`);
  });
});
