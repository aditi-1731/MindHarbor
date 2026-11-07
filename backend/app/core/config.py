from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "MindHarbor"
    ENVIRONMENT: str = "development"
    DATABASE_URL: str
    FRONTEND_URL: str = "http://localhost:5173"

    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()