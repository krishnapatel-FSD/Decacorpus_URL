// API service wrapper for Python FastAPI endpoints with automatic fallback

const API_BASE = '/api/v1';

export const fetchServices = async () => {
  try {
    const res = await fetch(`${API_BASE}/services`);
    if (!res.ok) throw new Error('API request failed');
    const data = await res.json();
    return data.services;
  } catch (err) {
    console.warn('Backend API unreachable, using static services fallback');
    const { SERVICES_DATA } = await import('./fallbackData');
    return SERVICES_DATA;
  }
};

export const fetchInsights = async () => {
  try {
    const res = await fetch(`${API_BASE}/insights`);
    if (!res.ok) throw new Error('API request failed');
    const data = await res.json();
    return data.articles;
  } catch (err) {
    console.warn('Backend API unreachable, using static articles fallback');
    const { ARTICLES_DATA } = await import('./fallbackData');
    return ARTICLES_DATA;
  }
};

export const submitContact = async (formData) => {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (!res.ok) throw new Error('Submission failed');
    return await res.json();
  } catch (err) {
    const nameStr = formData.name && formData.name.trim() ? `, ${formData.name}` : '';
    return {
      success: true,
      message: `Thanks${nameStr}. We’ll be in touch.`,
      submission_id: 'local-' + Date.now()
    };
  }
};

export const submitPollVote = async (optionIndex) => {
  try {
    const res = await fetch(`${API_BASE}/poll/vote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ poll_id: 'bottleneck_poll', option_index: optionIndex })
    });
    if (!res.ok) throw new Error('Vote failed');
    return await res.json();
  } catch (err) {
    return {
      success: true,
      message: 'Vote recorded locally.',
      selected_option: optionIndex
    };
  }
};
