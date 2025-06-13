/**
 * @swagger
 * components:
 *   schemas:
 *     Tarefa:
 *       type: object
 *       properties:
 *         Id:
 *           type: integer
 *           example: 1
 *         Titulo:
 *           type: string
 *           example: "Comprar leite"
 *         Descricao:
 *           type: string
 *           example: "Ir ao supermercado comprar leite"
 *         Concluido:
 *           type: boolean
 *           example: false
 *         DataCriacao:
 *           type: string
 *           format: date-time
 *           example: "2025-06-13T12:00:00Z"
 */
/**
 * @swagger
 * /tarefas:
 *   get:
 *     summary: Retorna todas as tarefas
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefa'
 */