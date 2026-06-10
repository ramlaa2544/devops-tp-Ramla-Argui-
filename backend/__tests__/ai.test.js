// Fonction qui transforme une réponse IA
function transformAIResponse(aiResponse) {
  return {
    priority: aiResponse.priorityScore,
    suggestions: aiResponse.suggestions,
    hasSuggestions: aiResponse.suggestions.length > 0,
  };
}

// Mock de la réponse IA — aucun appel réseau !
const fakeAI = {
  priorityScore: 75,
  suggestions: ['Ajouter une deadline', 'Décomposer en sous-tâches'],
};

test('should transform AI response for task priority', () => {
  // ARRANGE
  const input = fakeAI;
  // ACT
  const result = transformAIResponse(input);
  // ASSERT
  expect(result.priority).toBe(75);
  expect(result.suggestions).toHaveLength(2);
  expect(result.hasSuggestions).toBe(true);
});

test('should return false when AI has no suggestions for task', () => {
  // ARRANGE
  const emptyAI = { priorityScore: 0, suggestions: [] };
  // ACT
  const result = transformAIResponse(emptyAI);
  // ASSERT
  expect(result.hasSuggestions).toBe(false);
});