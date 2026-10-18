-- RLS for MEDISPHERE tables (no-auth app: anon key client)
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE exercise_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE medical_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;

-- patients: publicly readable demo record, writable via the app
CREATE POLICY "select_patients" ON patients FOR SELECT
  TO anon, authenticated USING (true);
CREATE POLICY "insert_patients" ON patients FOR INSERT
  TO anon, authenticated WITH CHECK (true);
CREATE POLICY "update_patients" ON patients FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

-- audit_logs: append-only ledger. Reads open for demo; no UPDATE/DELETE policies,
-- so the API cannot modify history once written.
CREATE POLICY "select_audit_logs" ON audit_logs FOR SELECT
  TO anon, authenticated USING (true);
CREATE POLICY "insert_audit_logs" ON audit_logs FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- daily_metrics
CREATE POLICY "select_daily_metrics" ON daily_metrics FOR SELECT
  TO anon, authenticated USING (true);
CREATE POLICY "insert_daily_metrics" ON daily_metrics FOR INSERT
  TO anon, authenticated WITH CHECK (true);
CREATE POLICY "update_daily_metrics" ON daily_metrics FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_daily_metrics" ON daily_metrics FOR DELETE
  TO anon, authenticated USING (true);

-- exercise_sessions
CREATE POLICY "select_exercise_sessions" ON exercise_sessions FOR SELECT
  TO anon, authenticated USING (true);
CREATE POLICY "insert_exercise_sessions" ON exercise_sessions FOR INSERT
  TO anon, authenticated WITH CHECK (true);
CREATE POLICY "update_exercise_sessions" ON exercise_sessions FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_exercise_sessions" ON exercise_sessions FOR DELETE
  TO anon, authenticated USING (true);

-- medical_documents
CREATE POLICY "select_medical_documents" ON medical_documents FOR SELECT
  TO anon, authenticated USING (true);
CREATE POLICY "insert_medical_documents" ON medical_documents FOR INSERT
  TO anon, authenticated WITH CHECK (true);
CREATE POLICY "update_medical_documents" ON medical_documents FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_medical_documents" ON medical_documents FOR DELETE
  TO anon, authenticated USING (true);

-- user_preferences
CREATE POLICY "select_user_preferences" ON user_preferences FOR SELECT
  TO anon, authenticated USING (true);
CREATE POLICY "insert_user_preferences" ON user_preferences FOR INSERT
  TO anon, authenticated WITH CHECK (true);
CREATE POLICY "update_user_preferences" ON user_preferences FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_user_preferences" ON user_preferences FOR DELETE
  TO anon, authenticated USING (true);