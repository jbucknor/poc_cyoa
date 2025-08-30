---
applyTo: "**"
---
# CYOA

## Project Summary
Static choose-your-own-adventure engine that renders a JSON/YAML story, supports choices, simple state, restart, and rules screen.

## Implementation Guidelines

### Architecture & Design
- Story loader parses JSON schema: passages keyed by id with text (Markdown) and choices [{label,to,if?}].
- State store tracks flags object; router uses hash with passage id.

### Core Features to Implement
- Render passage content; render choices; apply conditional visibility via flags.
- Restart to initial state; rules/help view.

### GitHub Pages Optimization
- No backend; stories embedded or selected via file input.

### User Experience & Interface Design
- Readable typography; large touch targets; keyboard navigation.

### Performance & Accessibility Standards
- A11y ≥ 90; text can be navigated by screen readers; focus order correct.

### Testing Strategy
- Unit tests for branching and conditions; sample story walkthrough.

## Technology Stack

### Required Technologies
- HTML/CSS/JS.

### Recommended Libraries & Tools
- Marked for Markdown parsing (small); DOMPurify for XSS safety.

### Integration Approaches
- None required.

## File Structure Recommendations
- `index.html`, `styles.css`, `app.js`
- `stories/sample.json` and schema docs

## Development Phases

### Phase 1: MVP Implementation
- Schema + renderer + restart.

### Phase 2: Enhancement & Optimization
- State flags and conditional choices; polish and a11y.

### Future Considerations
- Save/load, share links, authoring UI.

## Quality Assurance

### Acceptance Criteria
- Sample story fully playable; restart works; schema documented.

### Performance Benchmarks
- Near-instant navigation.

### Testing Requirements
- Validate conditions and dead-end detection in tests.

## Risk Mitigation
- XSS from story text: sanitize rendered HTML.

## Deployment Guidelines
- GH Pages standard setup; relative assets.

## Definition of Done
- Playable engine, docs, sample story.

## Maintenance & Updates
- Version schema and provide migration notes.
