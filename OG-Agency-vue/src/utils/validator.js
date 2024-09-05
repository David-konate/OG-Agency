// Importation de DOMPurify pour assainir les entrées
import DOMPurify from "dompurify";

// Expressions régulières
const nameRegex = /^[a-zA-Z\s-]+$/; // Inclut les espaces et les tirets
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const cityRegex = /^[a-zA-Z\s-]+$/; // Inclut les espaces et les tirets
const postalCodeRegex = /^\d+$/;
const agendaPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{10,}$/;
const titleRegex = /^[a-zA-Z0-9\s\-_]+$/; // Inclut les lettres, chiffres, espaces, tirets, et underscores
const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Format YYYY-MM-DD

// Fonction pour échapper les chaînes afin de prévenir les injections SQL
const escapeString = (str) => {
  if (typeof str !== "string") return str;
  return str.replace(/'/g, "''"); // Exemple d'échappement simple
};

// Fonction pour nettoyer les entrées afin de prévenir les attaques XSS
const sanitizeInput = (input) => {
  return DOMPurify.sanitize(input);
};

// Validation des champs
export const validateName = (name) => {
  if (!name) {
    return "Le nom ne peut pas être vide";
  }
  const sanitizedName = sanitizeInput(name);
  if (!nameRegex.test(escapeString(sanitizedName))) {
    return "Le nom contient des caractères invalides";
  }
  if (sanitizedName.length > 100) {
    return "Le nom est trop long";
  }
  return "";
};

export const validateEmail = (email) => {
  if (!email) {
    return "L'email ne peut pas être vide";
  }
  const sanitizedEmail = sanitizeInput(email);
  if (!emailRegex.test(escapeString(sanitizedEmail))) {
    return "L'email est invalide";
  }
  if (sanitizedEmail.length > 255) {
    return "L'email est trop long";
  }
  return "";
};

export const validatePassword = (password) => {
  if (!password) {
    return "Le mot de passe ne peut pas être vide";
  }
  const sanitizedPassword = sanitizeInput(password);
  if (!passwordRegex.test(escapeString(sanitizedPassword))) {
    return "Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial";
  }
  if (sanitizedPassword.length > 100) {
    return "Le mot de passe est trop long";
  }
  return "";
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return "La confirmation du mot de passe ne peut pas être vide";
  }
  if (password !== confirmPassword) {
    return "Les mots de passe ne correspondent pas";
  }
  return "";
};

export const validateTitle = (title) => {
  if (!title || title.trim() === "") {
    return "Le titre est obligatoire";
  }
  const sanitizedTitle = sanitizeInput(title);
  if (!titleRegex.test(escapeString(sanitizedTitle))) {
    return "Le titre contient des caractères invalides";
  }
  if (sanitizedTitle.length > 255) {
    return "Le titre est trop long";
  }
  return "";
};

export const validateContent = (content) => {
  const sanitizedContent = sanitizeInput(content);
  if (sanitizedContent.length > 1000) {
    return "Le contenu est trop long";
  }
  return "";
};

export const validateDate = (date) => {
  if (!date || date.trim() === "") {
    return "La date est obligatoire";
  }
  const sanitizedDate = sanitizeInput(date);
  if (!dateRegex.test(escapeString(sanitizedDate))) {
    return "La date doit être au format YYYY-MM-DD";
  }
  if (isNaN(Date.parse(sanitizedDate))) {
    return "La date est invalide";
  }
  return "";
};

export const validateDateRange = (startDate, endDate) => {
  if (!startDate || !endDate) {
    return "Les dates de début et de fin doivent être fournies";
  }
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return "Les dates doivent être valides";
  }

  if (start >= end) {
    return "La date de fin doit être postérieure à la date de début";
  }

  return "";
};

export const validateStreet = (street) => {
  if (street && street.trim() === "") {
    return "La rue ne peut pas être vide si elle est fournie";
  }
  return "";
};

export const validateCity = (city) => {
  if (
    city &&
    (!cityRegex.test(escapeString(sanitizeInput(city))) || city.trim() === "")
  ) {
    return "La ville est invalide";
  }
  return "";
};

export const validatePostalCode = (postalCode) => {
  if (
    postalCode &&
    (!postalCodeRegex.test(escapeString(sanitizeInput(postalCode))) ||
      postalCode.trim() === "")
  ) {
    return "Le code postal est invalide";
  }
  return "";
};

export const validateStateProvince = (stateProvince) => {
  if (stateProvince && stateProvince.trim() === "") {
    return "L'état ou la province ne peut pas être vide si fourni";
  }
  return "";
};

export const validateCountry = (country) => {
  if (country && country.trim() === "") {
    return "Le pays ne peut pas être vide s'il est fourni";
  }
  return "";
};

export const validateCoworkers = (coworkers) => {
  if (coworkers && coworkers.trim() === "") {
    return "Les collègues ne peuvent pas être vides s'ils sont fournis";
  }
  return "";
};

export const validateAgendaPassword = (password) => {
  if (!password) {
    return "Le mot de passe ne peut pas être vide";
  }

  const sanitizedPassword = sanitizeInput(password);
  if (!agendaPasswordRegex.test(escapeString(sanitizedPassword))) {
    return "Le mot de passe doit contenir au moins 10 caractères, avec au moins une lettre majuscule et une lettre minuscule";
  }

  if (sanitizedPassword.length > 100) {
    return "Le mot de passe est trop long";
  }

  return "";
};
