# Learn how to prevent re-render with React Tracked
[![Build Status][build-badge]][build]

## Performance issue with pure React

Our app works totally fine. But if a shared state becomes very big, we may experience a drop in performance. This is because all components that use the shared state will re-render even if only a small part of the shared state is changed.

React Tracked solves this issue without efforts.
