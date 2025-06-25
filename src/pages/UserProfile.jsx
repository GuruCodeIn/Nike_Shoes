/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Edit3, Save, X, Camera, Award, Package, Heart } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import Header from "../components/Header";

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const { user, updateProfile } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: user || {},
  });

  const pageStyles = {
    backgroundColor: "rgba(173, 170, 170, 1)",
    minHeight: "100vh",
    maxWidth: "100%",
    overflow: "hidden",
    margin: "0 auto",
  };

  const containerStyles = {
    padding: "40px 20px",
    fontFamily: "Barlow, -apple-system, Roboto, Helvetica, sans-serif",
  };

  const profileHeaderStyles = {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    marginBottom: "40px",
    padding: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    "@media (max-width: 768px)": {
      flexDirection: "column",
      textAlign: "center",
      gap: "20px",
    },
  };

  const avatarContainerStyles = {
    position: "relative",
    flexShrink: 0,
  };

  const avatarStyles = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #fff",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  };

  const avatarOverlayStyles = {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    opacity: 0,
    transition: "opacity 0.3s ease",
    "&:hover": {
      opacity: 1,
    },
  };

  const userInfoStyles = {
    flex: 1,
  };

  const nameStyles = {
    fontSize: "32px",
    fontWeight: "900",
    color: "#232526",
    marginBottom: "8px",
  };

  const emailStyles = {
    fontSize: "16px",
    color: "#666",
    marginBottom: "15px",
  };

  const memberSinceStyles = {
    fontSize: "14px",
    color: "#999",
    marginBottom: "20px",
  };

  const editButtonStyles = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 20px",
    borderRadius: "25px",
    border: "2px solid #232526",
    backgroundColor: "transparent",
    color: "#232526",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#232526",
      color: "#fff",
    },
  };

  const statsGridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  };

  const statCardStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "25px",
    borderRadius: "15px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
  };

  const statIconStyles = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#f0f0f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 15px",
    color: "#232526",
  };

  const statNumberStyles = {
    fontSize: "24px",
    fontWeight: "900",
    color: "#232526",
    marginBottom: "5px",
  };

  const statLabelStyles = {
    fontSize: "14px",
    color: "#666",
  };

  const formSectionStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "30px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
  };

  const sectionTitleStyles = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#232526",
    marginBottom: "25px",
  };

  const inputGroupStyles = {
    marginBottom: "20px",
  };

  const labelStyles = {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "8px",
  };

  const inputStyles = {
    width: "100%",
    padding: "12px 15px",
    borderRadius: "10px",
    border: "2px solid #e1e1e1",
    fontSize: "16px",
    fontFamily: "Barlow, -apple-system, Roboto, Helvetica, sans-serif",
    transition: "all 0.3s ease",
    "&:focus": {
      outline: "none",
      borderColor: "#232526",
      boxShadow: "0 0 0 3px rgba(35, 37, 38, 0.1)",
    },
    "&:disabled": {
      backgroundColor: "#f5f5f5",
      cursor: "not-allowed",
    },
  };

  const buttonGroupStyles = {
    display: "flex",
    gap: "15px",
    justifyContent: "flex-end",
    marginTop: "30px",
  };

  const saveButtonStyles = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 24px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#232526",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#1a1d1e",
    },
  };

  const cancelButtonStyles = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 24px",
    borderRadius: "10px",
    border: "2px solid #ccc",
    backgroundColor: "transparent",
    color: "#666",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: "#999",
      color: "#333",
    },
  };

  const onSubmit = async (data) => {
    const result = await updateProfile(data);
    if (result.success) {
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    reset(user);
    setIsEditing(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div css={pageStyles}>
      <Header />
      <motion.div
        css={containerStyles}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Header */}
        <motion.div
          css={profileHeaderStyles}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div css={avatarContainerStyles}>
            <img src={user.avatar} alt={user.name} css={avatarStyles} />
            <div css={avatarOverlayStyles}>
              <Camera size={24} color="#fff" />
            </div>
          </div>

          <div css={userInfoStyles}>
            <h1 css={nameStyles}>{user.name}</h1>
            <p css={emailStyles}>{user.email}</p>
            <p css={memberSinceStyles}>
              Nike Member since {formatDate(user.joinDate)}
            </p>

            <button
              css={editButtonStyles}
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit3 size={16} />
              {isEditing ? "Cancel Edit" : "Edit Profile"}
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          css={statsGridStyles}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div css={statCardStyles}>
            <div css={statIconStyles}>
              <Package size={24} />
            </div>
            <div css={statNumberStyles}>12</div>
            <div css={statLabelStyles}>Orders</div>
          </div>

          <div css={statCardStyles}>
            <div css={statIconStyles}>
              <Heart size={24} />
            </div>
            <div css={statNumberStyles}>8</div>
            <div css={statLabelStyles}>Favorites</div>
          </div>

          <div css={statCardStyles}>
            <div css={statIconStyles}>
              <Award size={24} />
            </div>
            <div css={statNumberStyles}>Premium</div>
            <div css={statLabelStyles}>Member Status</div>
          </div>
        </motion.div>

        {/* Profile Form */}
        <motion.div
          css={formSectionStyles}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 css={sectionTitleStyles}>Personal Information</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              css={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
              }}
            >
              <div css={inputGroupStyles}>
                <label css={labelStyles}>Full Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  css={inputStyles}
                  disabled={!isEditing}
                />
                {errors.name && (
                  <div
                    css={{
                      color: "#e74c3c",
                      fontSize: "14px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.name.message}
                  </div>
                )}
              </div>

              <div css={inputGroupStyles}>
                <label css={labelStyles}>Email</label>
                <input
                  {...register("email", { required: "Email is required" })}
                  css={inputStyles}
                  disabled={!isEditing}
                />
                {errors.email && (
                  <div
                    css={{
                      color: "#e74c3c",
                      fontSize: "14px",
                      marginTop: "5px",
                    }}
                  >
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div css={inputGroupStyles}>
                <label css={labelStyles}>Shoe Size</label>
                <select
                  {...register("preferences.shoeSize")}
                  css={inputStyles}
                  disabled={!isEditing}
                >
                  {[...Array(15)].map((_, i) => (
                    <option key={i + 6} value={i + 6}>
                      {i + 6}
                    </option>
                  ))}
                </select>
              </div>

              <div css={inputGroupStyles}>
                <label css={labelStyles}>Favorite Category</label>
                <select
                  {...register("preferences.favoriteCategory")}
                  css={inputStyles}
                  disabled={!isEditing}
                >
                  <option value="running">Running</option>
                  <option value="basketball">Basketball</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="training">Training</option>
                  <option value="soccer">Soccer</option>
                </select>
              </div>
            </div>

            {isEditing && (
              <motion.div
                css={buttonGroupStyles}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  type="button"
                  css={cancelButtonStyles}
                  onClick={handleCancel}
                >
                  <X size={16} />
                  Cancel
                </button>
                <button type="submit" css={saveButtonStyles}>
                  <Save size={16} />
                  Save Changes
                </button>
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default UserProfile;
