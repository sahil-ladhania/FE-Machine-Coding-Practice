/**
 * COMPONENT: DynamicForm
 * Form where users can add/remove input rows (e.g., multiple email fields)
 *
 * STATE SHAPE: Array of { id: string, value: string, error: string }
 *
 * STEPS:
 * Step 1: useState with initial array containing one empty field
 *         → [{ id: crypto.randomUUID(), value: '', error: '' }]
 *
 * Step 2: addField function:
 *         → append new { id: uuid, value: '', error: '' } to array
 *
 * Step 3: removeField(id) function:
 *         → filter out the entry with matching id
 *
 * Step 4: updateField(id, value) function:
 *         → map over array, update value where id matches, clear error
 *
 * Step 5: handleSubmit function:
 *         → validate each field (required + basic email regex)
 *         → if errors → update state with error messages, do NOT submit
 *         → if valid → console.log all values
 *
 * Step 6: Render:
 *         → Map over fields, render <input> + error message + remove button
 *         → "Add Field" button at bottom
 *         → Submit button
 */

import React, { useState } from 'react';

interface Field {
  id: string;
  value: string;
  error: string;
}

export function DynamicForm() {
  // your code here
  throw new Error("Not implemented");
}
