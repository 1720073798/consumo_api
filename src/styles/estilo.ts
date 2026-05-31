import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#D90429",
  secondary: "#2B2D42",
  background: "#F8F9FA",
  white: "#FFFFFF",
  textDark: "#111111",
  textGray: "#6C757D",
  success: "#2DC653",
  warning: "#FF9F1C",
  info: "#3A86FF",

  border: "#E9ECEF",
};

export const SIZES = {
  xs: 10,
  sm: 14,
  md: 18,
  lg: 24,
  xl: 32,
};

export const SHADOWS = {
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 5,
  },
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,

    backgroundColor: "#FFF",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 5,
  },

  userSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },

  welcomeText: {
    marginLeft: 12,
  },

  hello: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.textDark,
  },

  subtitle: {
    fontSize: 14,
    color: COLORS.textGray,
    marginTop: 2,
  },

  banner: {
    marginHorizontal: 20,
    borderRadius: 24,
    overflow: "hidden",
    backgroundColor: COLORS.primary,
    padding: 20,
    ...SHADOWS.card,
  },

  bannerImage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
    borderRadius: 20,
  },

  competitionInfo: {
    marginTop: 15,
  },

  competitionTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.white,
  },

  competitionDate: {
    fontSize: 16,
    color: COLORS.white,
    marginTop: 10,
  },

  statusCard: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 20,
    ...SHADOWS.card,
  },

  statusTitle: {
    fontSize: 16,
    color: COLORS.textGray,
  },

  statusText: {
    fontSize: 26,
    fontWeight: "700",
    color: COLORS.textDark,
    marginTop: 6,
  },

  waitButton: {
    marginTop: 20,
    backgroundColor: "#ADB5BD",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
  },

  waitButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.textDark,
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 20,
  },

  activitiesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  activityCard: {
    width: "31%",
    backgroundColor: COLORS.white,
    borderRadius: 22,
    padding: 16,
    alignItems: "center",
    ...SHADOWS.card,
  },

  activityTitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },

  //Mi avance
  progressCard: {
    backgroundColor: "#FFFFFF",

    marginHorizontal: 20,
    marginTop: 25,

    borderRadius: 30,

    padding: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 5,
  },
  progressTitle: {
    fontSize: 18,
    color: "#666",
    fontWeight: "600",
  },
  progresskm: {
    fontSize: 42,
    fontWeight: "800",
    color: "#111",
    marginTop: 10,
  },
  progressSubtitle: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
  },
  porgressFondoBarra: {
    height: 16,
    backgroundColor: "#ECECEC",
    borderRadius: 20,
    marginTop: 25,
    overflow: "hidden",
  },
  bannerContainer: {
    marginHorizontal: 20,
    marginTop: 25,

    borderRadius: 30,

    overflow: "hidden",

    position: "relative",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,

    elevation: 5,
  },
});

export const inputStyles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: "600", color: "#2D3748", marginBottom: 6 },
  inputWrapper: { position: "relative" },
  input: {
    height: 50,
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: "#2D3748",
    backgroundColor: "#F7FAFC",
  },
  inputError: { borderColor: "#E53E3E" },
  eyeIcon: { position: "absolute", right: 14, top: 12 },
  eyeText: { fontSize: 20 },
  errorText: { fontSize: 12, color: "#E53E3E", marginTop: 4 },
});

//LOGING
export const loginStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F7FAFC",
    padding: 24,
    justifyContent: "center",
  },
  header: { alignItems: "center", marginBottom: 40 },
  emoji: { fontSize: 56, marginBottom: 12 },
  title: { fontSize: 28, fontWeight: "800", color: "#1A202C" },
  subtitle: { fontSize: 16, color: "#718096", marginTop: 4 },
  form: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  button: { marginTop: 8 },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 24 },
  footerText: { fontSize: 15, color: "#718096" },
  link: { fontSize: 15, color: "#4F46E5", fontWeight: "700" },
});

export const buttonStyles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
//REGISTROS

export const registerStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F7FAFC",
    padding: 24,
    justifyContent: "center",
  },
  header: { alignItems: "center", marginBottom: 40 },
  emoji: { fontSize: 56, marginBottom: 12 },
  title: { fontSize: 28, fontWeight: "800", color: "#1A202C" },
  subtitle: { fontSize: 16, color: "#718096", marginTop: 4 },
  form: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  button: { marginTop: 8 },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 24 },
  footerText: { fontSize: 15, color: "#718096" },
  link: { fontSize: 15, color: "#4F46E5", fontWeight: "700" },
});

export const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7FAFC",
  },
  text: { marginTop: 12, fontSize: 16, color: "#718096" },
});

export const homeStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7FAFC" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop:73,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  greeting: { fontSize: 20, fontWeight: "800", color: "#1A202C" },
  email: { fontSize: 13, color: "#718096", maxWidth: 220 },
  logoutBtn: {
    backgroundColor: "#FFF5F5",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#FED7D7",
  },
  logoutText: { color: "#E53E3E", fontWeight: "700", fontSize: 14 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2D3748",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  list: { paddingHorizontal: 20, paddingBottom: 20 },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  errorEmoji: { fontSize: 56, marginBottom: 12 },
  errorText: { fontSize: 16, color: "#718096", textAlign: "center" },
});

export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 12,
  },
  badge: {
    backgroundColor: "#EEF2FF",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: { fontSize: 12, fontWeight: "700", color: "#4F46E5" },
  userId: { fontSize: 12, color: "#718096" },
  title: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1A202C",
    marginBottom: 8,
    textTransform: "capitalize",
  },
  body: { fontSize: 13, color: "#718096", lineHeight: 20 },
});

export const homeStyless = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F7FAFC" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop:73,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },
  greeting: { fontSize: 20, fontWeight: "800", color: "#1A202C" },
  email: { fontSize: 13, color: "#718096", maxWidth: 220 },
  logoutBtn: {
    backgroundColor: "#FFF5F5",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#FED7D7",
  },
  logoutText: { color: "#E53E3E", fontWeight: "700", fontSize: 14 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2D3748",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  list: { paddingHorizontal: 20, paddingBottom: 20 },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  errorEmoji: { fontSize: 56, marginBottom: 12 },
  errorText: { fontSize: 16, color: "#718096", textAlign: "center" },
});