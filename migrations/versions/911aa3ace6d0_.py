"""empty message

Revision ID: 911aa3ace6d0
Revises: 2494dc6f985b
Create Date: 2023-06-06 09:41:46.981584

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '911aa3ace6d0'
down_revision = '2494dc6f985b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('listSee', schema=None) as batch_op:
        batch_op.drop_constraint('listSee_nameFilm_key', type_='unique')
        batch_op.drop_constraint('listSee_urlApi_key', type_='unique')
        batch_op.drop_column('nameFilm')
        batch_op.drop_column('urlApi')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('listSee', schema=None) as batch_op:
        batch_op.add_column(sa.Column('urlApi', sa.VARCHAR(length=200), autoincrement=False, nullable=False))
        batch_op.add_column(sa.Column('nameFilm', sa.VARCHAR(length=200), autoincrement=False, nullable=False))
        batch_op.create_unique_constraint('listSee_urlApi_key', ['urlApi'])
        batch_op.create_unique_constraint('listSee_nameFilm_key', ['nameFilm'])

    # ### end Alembic commands ###
