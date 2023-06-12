import { test, expect } from '@playwright/test';

test('registro', async ({ page }) => {
    await page.goto('http://localhost:3000/register');
    await page.getByPlaceholder('Ingrese su nombre').click();
    await page.getByPlaceholder('Ingrese su nombre').fill('pepe');
    await page.getByPlaceholder('Ingrese su nombre').press('Tab');
    await page.getByPlaceholder('Ingrese su apellido').fill('juanito');
    await page.getByPlaceholder('Ingrese su apellido').press('Tab');
    await page.getByPlaceholder('Ingrese su correo electrónico').fill('pepe@anashe.com');
    await page.getByPlaceholder('Ingrese su correo electrónico').press('Tab');
    await page.getByPlaceholder('Ingrese su contraseña').fill('123');
    await page.getByPlaceholder('Ingrese su contraseña').press('Tab');
    await page.getByPlaceholder('Confirme su contraseña').fill('123');
    await page.getByRole('button', { name: 'Registrarse' }).click();

    await expect(page).toHaveURL('http://localhost:3000/login');

  });
  test('login', async ({ page }) => {
    await page.goto('http://localhost:3000/login');

    await page.getByPlaceholder('Ingrese su correo electrónico').click();
    await page.getByPlaceholder('Ingrese su correo electrónico').fill('admin@mail.com');
    await page.getByPlaceholder('Ingrese su contraseña').click();
    await page.getByPlaceholder('Ingrese su contraseña').fill('ad1');
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();

    await expect(page).toHaveURL('http://localhost:3000/inbox');

    await expect(page.getByText('personConfiguraciónContactosCerrar sesión') && page.getByText('person')).toBeVisible();

    
  });
  test('entrar a la bandeja de enviados', async ({ page }) => {
    await page.goto('http://localhost:3000/inbox');

    await page.getByRole('link', { name: 'Enviados' }).click();

    await expect(page).toHaveURL('http://localhost:3000/send');

    await expect(page.getByRole('heading', { name: 'Correos Enviados' })).toBeVisible();
    
  });
  test('favorti bandeja ', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.getByPlaceholder('Ingrese su correo electrónico').click();
    await page.getByPlaceholder('Ingrese su correo electrónico').fill('admin@mail.com');
    await page.getByPlaceholder('Ingrese su contraseña').click();
    await page.getByPlaceholder('Ingrese su contraseña').fill('ad1');
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
    await page.getByRole('link', { name: 'Favoritos' }).click();
    await expect(page.getByRole('heading', { name: 'Correos Favoritos' })).toBeVisible();

    
  });
  test('Crear contacto', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.getByPlaceholder('Ingrese su correo electrónico').click();
    await page.getByPlaceholder('Ingrese su correo electrónico').fill('admin@mail.com');
    await page.getByPlaceholder('Ingrese su correo electrónico').press('Tab');
    await page.getByPlaceholder('Ingrese su contraseña').fill('ad1');
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
    await page.getByText('person').click();
    await page.getByRole('button', { name: 'Contactos' }).click();
    await page.getByRole('button', { name: 'Agregar un nuevo contacto' }).click();
    await page.getByPlaceholder('Ingrese su nombre').click();
    await page.getByPlaceholder('Ingrese su nombre').fill('pepe');
    await page.getByPlaceholder('Ingrese su nombre').press('Tab');
    await page.getByPlaceholder('Ingrese su apellido').fill('planta');
    await page.getByPlaceholder('Ingrese su apellido').press('Tab');
    await page.getByPlaceholder('Ingrese su correo electrónico').fill('pepeelplanta@gmail.com');
    await page.getByPlaceholder('Ingrese su correo electrónico').press('Tab');
    await page.getByPlaceholder('Ingrese su contraseña').fill('amigo');
    await page.getByRole('button', { name: 'Añadir' }).click();

    await expect(page.locator('div').filter({ hasText: /^pepeplantapepeelplanta@gmail\.comamigoEnviar un correoEliminar Contacto$/ }).getByRole('heading', { name: 'pepe' })
    && page.getByText('planta', { exact: true }) 
    && page.getByText('pepeelplanta@gmail.com')
    && page.getByText('amigo', { exact: true })).toBeVisible();
  });
  test('Cerrar cuenta', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.getByPlaceholder('Ingrese su correo electrónico').click();
    await page.getByPlaceholder('Ingrese su correo electrónico').fill('admin@mail.com');
    await page.getByPlaceholder('Ingrese su correo electrónico').press('Tab');
    await page.getByPlaceholder('Ingrese su contraseña').fill('ad1');
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
    await page.getByText('person').click();
    await page.getByRole('button', { name: 'Cerrar sesión' }).click();

    await expect(page.getByRole('heading', { name: 'Iniciar Sesión' })).toBeVisible();
  });
  test('Configuracion de la cuenta', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await page.locator('html').click();
    await page.getByPlaceholder('Ingrese su correo electrónico').click();
    await page.getByPlaceholder('Ingrese su correo electrónico').fill('admin@mail.com');
    await page.getByPlaceholder('Ingrese su correo electrónico').press('Tab');
    await page.getByPlaceholder('Ingrese su contraseña').fill('ad1');
    await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
    await page.getByText('person').click();
    await page.getByRole('button', { name: 'Configuración' }).click();
    await page.getByRole('heading', { name: 'Configuración de la cuenta' }).click();
  });