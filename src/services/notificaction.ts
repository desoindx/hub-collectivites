import toast from "react-hot-toast";

export const success = {
  PROJECT_CREATED: "Vous projet a bien été créé.",
};

export const error = {
  UNAUTHENTICATED: "Vous devez être authentifié pour effectuer cette requête.",
  PARSING_ERROR: "Erreur de validation des données envoyées.",
};

const messages = {
  ...error,
  ...success,
};

export type NotificationsType = "success" | "error";
export type NotificationsMessage = keyof typeof messages;

export const notifications = (type?: NotificationsType, message?: NotificationsMessage) => {
  !type || !message
    ? console.warn("Notifications: le type et le message ne sont pas définis dans la réponse de la serveur action.")
    : toast[type](messages[message]);
};
