from doberman_agent.evaluation.domain.models.evaluation import EvaluationBase


class EvaluationRead(EvaluationBase):
    id: int
    user_name: str | None = None


class EvaluationCreate(EvaluationBase):
    pass
