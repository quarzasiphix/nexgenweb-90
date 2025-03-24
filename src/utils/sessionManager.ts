
import { v4 as uuidv4 } from 'uuid';

/**
 * Gets or creates a session ID for a specific chat context
 * 
 * @param contextKey - A unique key to identify different chat contexts (e.g., 'main-chat', 'contact-form')
 * @returns The session ID for the given context
 */
export const getOrCreateSessionId = (contextKey: string): string => {
  const storageKey = `${contextKey}SessionId`;
  let sessionId = localStorage.getItem(storageKey);
  
  if (!sessionId) {
    sessionId = uuidv4();
    localStorage.setItem(storageKey, sessionId);
  }
  
  return sessionId;
};

/**
 * Creates a new session ID for a specific chat context
 * 
 * @param contextKey - A unique key to identify different chat contexts
 * @returns A new session ID
 */
export const createNewSessionId = (contextKey: string): string => {
  const storageKey = `${contextKey}SessionId`;
  const sessionId = uuidv4();
  localStorage.setItem(storageKey, sessionId);
  return sessionId;
};

/**
 * Clears a session ID for a specific chat context
 * 
 * @param contextKey - A unique key to identify different chat contexts
 */
export const clearSessionId = (contextKey: string): void => {
  const storageKey = `${contextKey}SessionId`;
  localStorage.removeItem(storageKey);
};
