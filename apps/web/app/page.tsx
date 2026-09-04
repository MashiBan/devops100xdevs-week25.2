import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f5f7ff 0%, #e6f0ff 100%)",
        padding: "24px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(148,163,184,0.2)",
          borderRadius: "20px",
          boxShadow: "0 20px 45px rgba(15, 23, 42, 0.12)",
          padding: "32px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#4f46e5",
            fontWeight: 700,
          }}
        >
          User profile
        </p>

        <h1
          style={{
            margin: "12px 0 24px",
            fontSize: "2rem",
            lineHeight: 1.2,
            color: "#0f172a",
          }}
        >
          Welcome
        </h1>

        <div
          style={{
            display: "grid",
            gap: "16px",
          }}
        >
          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "14px 16px",
              border: "1px solid #e2e8f0",
            }}
          >
            <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "6px" }}>
              First name
            </div>
            <div style={{ fontSize: "1.1rem", color: "#0f172a", fontWeight: 600 }}>
              {user?.username ?? "Not available"}
            </div>
          </div>

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "12px",
              padding: "14px 16px",
              border: "1px solid #e2e8f0",
            }}
          >
            <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "6px" }}>
              Password
            </div>
            <div style={{ fontSize: "1.1rem", color: "#0f172a", fontWeight: 600 }}>
              {user?.password ?? "Not available"}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}