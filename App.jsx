import React from 'react';
import UserProfile from './UserProfile';

export default function App() {
  return (
    <div style={{ padding: '2rem', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <UserProfile />

      <UserProfile 
        name="Marcus Vance"
        bio="Frontend Engineer & Open Source Contributor. Big fan of TypeScript, web performance, and rock climbing."
        avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
        skills={["TypeScript", "React", "Next.js", "Tailwind"]}
        initialDarkMode={true}
      />
    </div>
  );
}