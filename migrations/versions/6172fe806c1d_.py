"""empty message

Revision ID: 6172fe806c1d
Revises: 5614992aaaca
Create Date: 2023-05-30 09:50:35.763634

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6172fe806c1d'
down_revision = '5614992aaaca'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('userName', sa.String(length=120), nullable=False))
        batch_op.create_unique_constraint(None, ['userName'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('userName')

    # ### end Alembic commands ###
